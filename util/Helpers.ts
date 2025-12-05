

export function validateEmail(text: string): boolean {
  const re: RegExp = /\S+@\S+\.\S+/;
  return re.test(text);
}

export function validateUserID(text: string): boolean {
  const re: RegExp = /^\d{2}-\d{4}-\d{3}$/;
  return re.test(text);
}

export function validateName(text: string): boolean {
  const re: RegExp = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
  return re.test(text);
}

export function validateInitial(text: string): boolean {
  const re: RegExp = /^[A-Za-z]$/;
  return re.test(text);
}

export function extractDomain(text: string): string {
    return text.substring(text.indexOf('@') + 1);
}

export function validatePassword(text: string): boolean {
  if (text.length < 8){
    return false;
  }

  if (!(/[A-Z]/.test(text)) || !(/[a-z]/.test(text))){
    return false;
  }
  if (!/[0-9]/.test(text)){
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>_\-]/.test(text)){
    return false;
  }

  return true;
}

export function attachFullName(fName: string, mInitial: string, lName: string): string {
  return fName + " " + mInitial + " . " + lName;
}

export function capitalize(text: string): string {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function extractBatch(id: string): string | null {
  if (!validateUserID(id)){
    return null;
  }
  
  return ((+id.slice(3, 7)) + 6).toString();
}

export function batchToGrade(batch: string): number {
  const now: Date = new Date();

  const year: number = now.getFullYear();
  const month: number = now.getMonth();

  const graduationYear: number = +batch;
  const academicYear: number = (month <= 6) ? (year) : (year + 1);

  return (12 - graduationYear + academicYear);
}

export function clamp(x: number, min: number, max: number){
  return Math.max(Math.min(x, max), min);
}