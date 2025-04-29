import {useFormStatus} from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className="bg-spongBlue text-spongWhite mt-2 py-2 rounded-sm w-80">
            {pending ? 'Sending...' : 'Submit'}
        </button>
    )
}