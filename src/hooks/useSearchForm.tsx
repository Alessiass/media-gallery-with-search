import { useForm, UseFormProps } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { searchSchema } from "../schema/searchSchema"

export const useSearchForm= (props?: Omit<UseFormProps, 'resolver'>) => useForm({resolver: zodResolver(searchSchema), ...props})