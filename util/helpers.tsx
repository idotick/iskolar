export function validate_email(text: string): boolean {
  var re = /\S+@\S+\.\S+/;
  return re.test(text);
}

export function extract_domain(text: string): string {
    return text.substring(text.indexOf('@') + 1);
}

export function validate_password(text: string): boolean {
    return true;
}