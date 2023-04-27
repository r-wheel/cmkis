export class Users {

  public facultyid?: number;
  public firstname?: string;
  public middlename?: string;
  public lastname?: string;
  public connum?: string;
  public username?: string;
  public email?: string;
  public password?: string;
  public conpassword?: string;

  constructor (
    facultyid: number,
    firstname: string,
    middlename: string,
    lastname: string,
    connum: string,
    username: string,
    email: string,
    password: string,
    conpassword: string,

  )

  {
    this.facultyid = facultyid;
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.connum = connum;
    this.username = username;
    this.email = email;
    this.password = password;
    this.conpassword = conpassword;
  }

}

