import { gql } from '@apollo/client'

export const ALL_OWNERS = gql`
    query {
      allOwners {
        nodes {
            id
            fullName
            lastName
            email
            adress
            companyName
            documentNumber
            documentType
            nit
            phone
            typePerson
        }
      }
    }
   `

export const FIND_OWNER = gql`
    query ownerById($idToSearch: Int!) {
        ownerById(id: $idToSearch) {
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
`