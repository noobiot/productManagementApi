import "dotenv/config";
import { z } from "zod";

const environmentSchema = z.object({
    PORT: z.coerce.number().int().min(1).max(65355).default(3000),
});

const environmentValidation = environmentSchema.safeParse(process.env); 
// We will first verify the environment variable. if the port number is valid or not
if(!environmentValidation.success){
    const validationErrors = environmentValidation.error.issues.map((issue) => {
        return `issue ${issue.path.join(".")} : ${issue.message}`
    });

    process.stderr.write(`Error : ${validationErrors.join('\n')} \n`);
    process.exit(1);
}

// Export the environment for it to get used..
export const environment = environmentValidation.data;