// This is file for type and interface


// Type
type Sql = string
type ErrorResponse = unknown
type StatusCreate = { name: string }


// interface
interface GetAllStatus {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}