import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const id = req.body.id;
  const studentClass = req.body.studentClass;
  const marksheet = req.body.marksheet;
  const { db } = await connectToDatabase();
  const user = await db.collection("users").updateOne(
    { _id: id },
    {
      $set: { [studentClass]: marksheet },
    }
  );
  if (!user.matchedCount) {
    return res.json({ isUpdated: false });
  }
  res.json({ isUpdated: true });
};
