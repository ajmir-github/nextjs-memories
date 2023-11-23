type FormState<Error> =
  | undefined // inital state
  | null // after the successfully execution
  | { origin: "CLIENT"; error: Error } // on client error
  | { origin: "SERVER"; error: string }; // on server error

export default FormState;
