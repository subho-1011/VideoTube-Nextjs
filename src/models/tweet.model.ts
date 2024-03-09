import mongoose, { Document, Model, Schema } from "mongoose";

interface TweetDocument extends Document {
  text: string;
  owner: Schema.Types.ObjectId;
  imageUrl?: string;
}

const tweetSchema = new Schema<TweetDocument>(
  {
    text: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Tweet: Model<TweetDocument> = mongoose.model<TweetDocument>(
  "Tweet",
  tweetSchema
);

export default Tweet;
