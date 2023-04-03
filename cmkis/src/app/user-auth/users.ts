export class Users {

  public id: number;
  public fname: string;
  public lname: string;
  public email: string;
  public pass: string;

  constructor (
    id: number,
    fname: string,
    lname: string,
    email: string,
    pass: string,
  )

  {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.pass = pass;
  }

}

