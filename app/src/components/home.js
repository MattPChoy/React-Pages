import * as React from 'react';
import Button from '@mui/material/Button';
import FhirClientProvider from "./FhirClientProvider";

export default function Home() {
    return (
        <FhirClientProvider>
            <div>
                <p>landing page</p>
            </div>
        </FhirClientProvider>
    )
}
