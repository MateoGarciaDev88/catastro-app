import { gql } from '@apollo/client'

export const CREATE_OWNER = gql`
mutation  addOwner($fullName: String, $lastName: String, $adress: String, $companyName: String, $documentNumber: String, $documentType: String, $email: String, $nit: String, $phone: String, $typePerson: String){
  createOwner(
      input: {
          owner: {
            adress: $adress
            companyName: $companyName
            documentNumber: $documentNumber
            documentType: $documentType
            email: $email
            fullName: $fullName
            lastName: $lastName
            nit: $nit
            phone: $phone
            typePerson: $typePerson
          }
      }
  ) {
      owner {
        adress
        companyName
        documentNumber
        documentType
        email
        fullName
        id
        lastName
        nit
        phone
        typePerson
    }
  }
}
`

export const EDIT_OWNER = gql`
  mutation editOwner ($idToEdit: Int!, $fullName: String, $lastName: String, $adress: String, $companyName: String, $documentNumber: String, $documentType: String, $email: String, $nit: String, $phone: String, $typePerson: String) {
    updateOwnerById(
    input: { id: $idToEdit, ownerPatch: {
            adress: $adress
            companyName: $companyName
            documentNumber: $documentNumber
            documentType: $documentType
            email: $email
            fullName: $fullName
            lastName: $lastName
            nit: $nit
            phone: $phone
            typePerson: $typePerson
        }
      }
  ) {
    owner {
      adress
      companyName
      documentNumber
      documentType
      email
      fullName
      lastName
      nit
      phone
      typePerson
    }
  }
}
`

export const DELETE_OWNER = gql`
  mutation deleteOwner($idToDelete: Int!) {
  deleteOwnerById(
    input: {
      id: $idToDelete
    }) {
    deletedOwnerId
  }
}
`