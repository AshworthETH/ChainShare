// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileShare {
    struct File {
        string ipfsHash;
        string fileName;
        address owner;
        uint256 timestamp;
        bool isPublic;
        string encryptionKey;
    }

    mapping(uint256 => File) public files;
    mapping(address => uint256[]) public userFiles;
    mapping(uint256 => address[]) public fileAccess;

    uint256 public fileCount;

    event FileUploaded(
        uint256 indexed fileId,
        string ipfsHash,
        string fileName,
        address indexed owner
    );

    event AccessGranted(
        uint256 indexed fileId,
        address indexed user
    );

    function uploadFile(
        string memory _ipfsHash,
        string memory _fileName,
        bool _isPublic,
        string memory _encryptionKey
    ) public {
        fileCount++;

        files[fileCount] = File({
            ipfsHash: _ipfsHash,
            fileName: _fileName,
            owner: msg.sender,
            timestamp: block.timestamp,
            isPublic: _isPublic,
            encryptionKey: _encryptionKey
        });

        userFiles[msg.sender].push(fileCount);

        emit FileUploaded(fileCount, _ipfsHash, _fileName, msg.sender);
    }

    function grantAccess(uint256 _fileId, address _user) public {
        require(files[_fileId].owner == msg.sender, "Only owner can grant access");
        require(_fileId <= fileCount && _fileId > 0, "Invalid file ID");

        fileAccess[_fileId].push(_user);

        emit AccessGranted(_fileId, _user);
    }

    function hasAccess(uint256 _fileId, address _user) public view returns (bool) {
        if (files[_fileId].owner == _user) {
            return true;
        }

        if (files[_fileId].isPublic) {
            return true;
        }

        address[] memory accessList = fileAccess[_fileId];
        for (uint i = 0; i < accessList.length; i++) {
            if (accessList[i] == _user) {
                return true;
            }
        }

        return false;
    }

    function getFile(uint256 _fileId) public view returns (
        string memory ipfsHash,
        string memory fileName,
        address owner,
        uint256 timestamp,
        bool isPublic
    ) {
        require(_fileId <= fileCount && _fileId > 0, "Invalid file ID");
        require(hasAccess(_fileId, msg.sender), "Access denied");

        File memory file = files[_fileId];
        return (
            file.ipfsHash,
            file.fileName,
            file.owner,
            file.timestamp,
            file.isPublic
        );
    }

    function getUserFiles(address _user) public view returns (uint256[] memory) {
        return userFiles[_user];
    }
}