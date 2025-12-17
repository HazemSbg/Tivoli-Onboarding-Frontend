import type {NewHire} from "../types.ts";
import * as React from "react";

type PersonProps = {
    newHire: NewHire;
}

export const Person = (props: PersonProps) => {
    const [showDetails, setShowDetails] = React.useState(false);
    return <>
        <div
            className={`flex flex-col justify-center content-center w-fit rounded-sm gap-4 ${showDetails ? 'col-start-1' : ''}`}
        >
            <img alt={'Person image'} src={props.newHire.photoPath} className={'rounded-full cursor-pointer'}
                 onClick={() => setShowDetails(!showDetails)}
            />
            <div className={'flex flex-col'}>
                <h1>{props.newHire.firstName}</h1>
                <h1>{props.newHire.position}</h1>
            </div>
        </div>

        {showDetails ?
            <div
                className={'flex flex-col bg-gray-400 p-5 rounded-[10px] col-span-2 min-w-150 min-h-50 opacity-0 transition-opacity ease-in duration-200 animate-fade-in'}
            >
                <button
                    className={'ml-auto bg-[#de673c] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer'}
                    onClick={() => setShowDetails(false)}
                >
                    ×
                </button>

                <div className="flex flex-col justify-center content-center items-center mt-3 space-y-2">
                    <h1 className="text-xl font-semibold text-gray-900">{props.newHire.firstName} {props.newHire.lastName}</h1>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {props.newHire.email}</p>
                    <p className="text-gray-700"><span className="font-semibold">Position:</span> {props.newHire.position}</p>
                    <p className="text-gray-700"><span className="font-semibold">Department:</span> {props.newHire.department}</p>
                    <p className="text-gray-700"><span className="font-semibold">Manager:</span> {props.newHire.manager}</p>
                    <p className="text-gray-700"><span className="font-semibold">Degree:</span> {props.newHire.degree}</p>
                    <p className="text-gray-700"><span className="font-semibold">Date of Joining:</span> {props.newHire.dateOfJoining}</p>
                </div>
            </div> : <></>
        }
    </>
}