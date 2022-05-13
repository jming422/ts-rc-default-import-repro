import snakecaseKeys from "snakecase-keys";

export async function main() {
  const foo = { fizzBuzz: "bar" };
  const snaked = snakecaseKeys(foo);
  console.log(
    `orig: ${JSON.stringify(foo)}, snaked: ${JSON.stringify(snaked)}`
  );
}

main();
