import React from "react"
import {
MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBIcon
} from "mdbreact"
import _ from "lodash"


const RepositoryList = ({ repositories }) => (
 <MDBContainer className="mt-5">
  <MDBRow>
   { _.map(repositories.nodes, (repository, i) => (
  <MDBCol key={i} lg="4" md="6" sm="12">
   <MDBCard className="m-2 w-100">
    <MDBCardBody >
      <MDBCardTitle>
      <MDBIcon icon="folder" className="mr-1"/>
      <a className="black-text" href={`${repository.url}`}> {repository.name}</a>
      </MDBCardTitle>
      <MDBCardText>{repository.description}</MDBCardText>
        <div>
          <MDBIcon icon="arrow-down" className="mr-1" color="amber-text"/>
          <span className="mr-3">{repository.pullRequests.totalCount}</span>
          <MDBIcon icon="glasses" className="mr-1"/>
          <span className="mr-3">{repository.watchers.totalCount}</span>
          <MDBIcon icon="project-diagram" className="mr-1"/>
          <span className="mr-3">{repository.forks.totalCount}</span>
        </div>

      </MDBCardBody>
     </MDBCard>
    </MDBCol>
   ))}
  </MDBRow>
</MDBContainer>
)


export default RepositoryList
