{
  //
  //   type FrontendDeveloper = "MERN" | "FULL STACK DEVLOPER";
  //   const newDeveloper: FrontendDeveloper = "MERN";

  // TODO : intersection types ->
  
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const newFullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS", "MONGODB", "NODE", "TYPESCRIPT"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
