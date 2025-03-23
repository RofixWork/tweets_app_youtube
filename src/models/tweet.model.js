import {Schema, model, Model} from 'mongoose';
import { TWEET_STATUS } from '../utils/constants.js';


const TweetSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
        minlength: 20,
        maxlength: 255,
        trim: true
    },
    description: {
        type: Schema.Types.String,
        required: true,
        minlength: 50,
        trim: true
    },
    image: {
        type: Schema.Types.String,
        required: true,
        validate: {
            validator: (value) => {
                const url = new URL(value);
                return url.protocol === 'http:' || url.protocol === 'https:';
            },
            message: 'Invalid URL. Please provide a valid URL.'
        }
    },
    status: {
        type: String,
        enum: {
            values: Object.values(TWEET_STATUS),
            message: '{VALUE} is not a valid status, please choose "published" or "draft".'
          },
        default: TWEET_STATUS.DRAFT,
    }
}, {
    timestamps: true,
})

/**
 * @type {Model}
 */
const Tweet = model("Tweet", TweetSchema);


export default Tweet;