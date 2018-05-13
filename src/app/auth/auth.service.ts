import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { HttpClient } from '@angular/common/http';


const AUTH_QUERY = gql`
  query Auth($email: String!, $password: String! ) {
    auth(email: $email, password: $password)
  }
`;

@Injectable()
export class AuthService {


  public url :string = 'localhost:4001'

  public constructor(protected http: HttpClient, protected apollo:Apollo) { }

  public login(email:string, password:string ) {

    return this.apollo.watchQuery({
    query: AUTH_QUERY,
    variables: {
          email: email,
          password: password,
        },
    })
    .valueChanges
    
  }

}
