import { notifyControl } from "@/mailer/notify-control";

export default async function (req, res) {
  if (req.method === "POST") return;
  const { message, data } = req.body;
  console.log({ message, data });

  const { error, success } = await notifyControl(message, data);

  if (error) {
    res.status(500).send({ error: true, message: "Error notifying control" });
  } else {
    res.status(200).send({ message: "Control notified", error: false });
  }
}
