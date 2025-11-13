export function validateEmail(text: string): boolean {
  var re = /\S+@\S+\.\S+/;
  return re.test(text);
}

export function extractDomain(text: string): string {
    return text.substring(text.indexOf('@') + 1);
}

export function validatePassword(text: string): boolean {
    return true;
}

export function getFullName(fName: string, mName: string, lName: string){
  return fName + " " + mName + " . " + lName;
}