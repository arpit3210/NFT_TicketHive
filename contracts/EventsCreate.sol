// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract PersonID is ERC721URIStorage, Ownable {

    struct PersonIDDetails {
        string Name;
        string Experience;
        string Orgnanization_or_CollegeName;
        string EmailID_AND_PhoneNo;
    }

    mapping(string => PersonIDDetails) private _personIDDetails;
    mapping(string => bool) private _personIDExists;
    uint256 private _tokenCounter;

    constructor() ERC721("PersonID", "PID") {}

    function newPersonID(
        string memory _personID,
        string memory _name,
        string memory _experience,
        string memory _orgnanization_or_collegeName,
        string memory _emailID_and_phoneNo,
        string memory _tokenURI
    ) public onlyOwner {
        require(!_personIDExists[_personID], "PersonID already exists");
        _personIDDetails[_personID] = PersonIDDetails(
            _name,
            _experience,
            _orgnanization_or_collegeName,
            _emailID_and_phoneNo
        );
        _personIDExists[_personID] = true;
        _tokenCounter++;
        _safeMint(msg.sender, _tokenCounter);
        _setTokenURI(_tokenCounter, _tokenURI);
    }

    function getPersonIDDetails(string memory _personID)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(_personIDExists[_personID], "PersonID does not exist");
        PersonIDDetails memory details = _personIDDetails[_personID];
        return (
            details.Name,
            details.Experience,
            details.Orgnanization_or_CollegeName,
            details.EmailID_AND_PhoneNo
        );
    }
}