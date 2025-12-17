import {getMockNewHires} from "../mockdata.ts";
import {Person} from "./Person.tsx";

export const NewHires = () => {
    const newHires = getMockNewHires();
    return <>
        <div id={'hr'} className={'flex flex-col items-center justify-center p-10 gap-20'}>
            <h1 className={'font-bold text-5xl'}>Let's hear from HR</h1>
            <div className={'flex items-center justify-center gap-35'}>
                <p className={'max-w-150 text-2xl'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.</p>
                <img className={'rounded-full w-100'} alt={'manager'} src={'anwar.png'}/>
            </div>
        </div>
        <div id={'new-hires-section'} className={'bg-[#f0e9e6]'}>
            <div className={'grid gap-10 grid-cols-3 p-10 place-items-center'}>
                {newHires.map((newHire) =>
                    <Person newHire={newHire}/>
                )}
            </div>
        </div>
    </>
}