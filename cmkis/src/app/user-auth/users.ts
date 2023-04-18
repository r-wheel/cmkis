export class Users {

  // public id?: number;
  public first_name?: string;
  public middle_initial?: string;
  public last_name?: string;
  public username?: string;
  public pass?: string;

  constructor (
    // id: number,
    first_name: string,
    middle_initial: string,
    last_name: string,
    username: string,
    pass: string,
  )

  {
    // this.id = id;
    this.first_name = first_name;
    this.middle_initial = middle_initial;
    this.last_name = last_name;
    this.username = username;
    this.pass = pass;
  }

}

