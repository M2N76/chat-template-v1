import faker from "faker";

export function messageGenerator(count = 1) {
  const messages = [];

  do {
    messages.push({
      id: faker.random.uuid(),
      type: faker.random.boolean() ? "receive" : "sent",
      message: faker.lorem.sentence(),
      time: faker.date.recent().toLocaleTimeString(),
    });
    count--;
  } while (count);

  return messages;
}
