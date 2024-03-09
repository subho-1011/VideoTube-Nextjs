import mongoose, { Document, Model, Schema } from "mongoose";

interface VideoDocument extends Document {
  videoUrl: string;
  thumbnailUrl: string;
  owner: string;
  title: string;
  description: string;
  duration: number;
  tags?: string[];
  views: number;
  isPublished: boolean;
}

const videoSchema = new Schema<VideoDocument>(
  {
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Video: Model<VideoDocument> =
  mongoose.models.Video || mongoose.model<VideoDocument>("Video", videoSchema);

export default Video;
