// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract PersonID {
    
  address admin;
  
  constructor() {
    admin = msg.sender;    
  }
  
  modifier onlyAdmin {
      require(msg.sender == admin, "Only admin can Issue ");
      _;
  }
  
  struct personid {
      string Name;
      string Experience;
      string Orgnanization_or_CollegeName;
      string EmailID_AND_PhoneNo;
  }
  
  mapping (string => personid) public personidDetails;
  
  function newPersonID (
      string memory _PersonID,
      string memory _Name,
      string memory _Experience,
      string memory _Orgnanization_or_CollegeName,
      string memory _EmailID_AND_PhoneNo
     ) public onlyAdmin {
          personidDetails[_PersonID] = personid(
                                                    _Name,
                                                    _Experience,
                                                    _Orgnanization_or_CollegeName,
                                                    _EmailID_AND_PhoneNo);
      }
}


