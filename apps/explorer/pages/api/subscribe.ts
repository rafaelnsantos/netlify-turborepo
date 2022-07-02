import { handler } from "api/mailchimp/handler"
import { MAILCHIMP_URL } from "@/content/env"

export default handler(MAILCHIMP_URL)
