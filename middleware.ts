export { default } from "next-auth/middleware";

export const config = {
    // * after a parameter - zero or more parameters
    // + after the parameter - one or more
    // ? after the parameter - zero or one
    matcher: ["/users/:id*"]
}