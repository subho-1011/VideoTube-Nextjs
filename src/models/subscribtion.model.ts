import mongoose, { Document, Model, Schema } from "mongoose";

interface SubscriptionDocument extends Document {
  subcriber: Schema.Types.ObjectId;
  channel: Schema.Types.ObjectId;
}

const SubscriptionSchema = new Schema<SubscriptionDocument>(
  {
    subcriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subscription: Model<SubscriptionDocument> =
  mongoose.model<SubscriptionDocument>("Subscription", SubscriptionSchema);

export default Subscription;
