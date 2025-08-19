const {gql} = require('graphql-tag');

const typeDefs = gql`
    type User {
        id:ID!
        name:String!
        email:String!
        password:String!
    }

    type Student {
        id:ID!
        name:String!
        email:String!
        branch:String!
        section:String!
        batch:Int!
    }

    type Query {
        students:[Student]
        student(id:ID!):Student
        studentName(name:String!):[Student]
        studentSection(section:String!):[Student]
        studentBranch(branch:String!):[Student]
        studentBranchSection(branch:String!,section:String!):[Student]
    }

    type Mutation {
        insertStudent(
            name:String!
            email:String!
            branch:String!
            section:String!
            batch:Int!
        ): Student

        updateStudent(
            id:ID!
            name:String
            email:String
            branch:String
            section:String
            batch:Int
        ):Student

        deleteStudent(id:ID!):Student
    }

`
module.exports = typeDefs;