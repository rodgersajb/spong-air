import {useFormStatus} from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
      <button
        type="submit"
        className="bg-spongBlue text-spongWhite mt-2 py-2 rounded-sm w-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-spongWhite transition-all duration-200"
        aria-label="Submit form"
      >
        {pending ? "Sending..." : "Submit"}
      </button>
    );
}