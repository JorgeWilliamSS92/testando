export function exec(message, color = "red") {
  const v = `color:${color}`;
  console.log(`%c${message}`, v);
}
