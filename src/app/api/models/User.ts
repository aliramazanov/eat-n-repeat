import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (password: string) => {
          if (password.length < 5) {
            throw new Error("Password must be at least 5 characters!");
          }
          return true;
        },
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", async (user) => {
  const phrase = user.password;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(phrase, salt);
});

const User = models?.User || model("User", UserSchema);
export default User;
