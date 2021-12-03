// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const user = await db
    .collection("users")
    .find({ _id: req.body.id })
    .toArray();
  if (!user.length || user[0].password !== req.body.password) {
     return res.json({});
  }
  res.json({ user: user[0] });
};
