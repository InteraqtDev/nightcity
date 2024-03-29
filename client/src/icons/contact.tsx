import { createElementNS as createElement} from 'axii'
export const ContactIcon = function() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
                <circle cx="12" cy="10" r="2"/>
                <path d="M8 2v2m8-2v2"/>
            </g>
        </svg>
    )
}
