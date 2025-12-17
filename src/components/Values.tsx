export const Values = () => {
    const valueItems = [
        { text: 'Career opportunities', icon: 'graph.svg' },
        { text: 'Innovation & Growth', icon: 'career.svg' },
        { text: 'Team Collaboration', icon: 'team.svg' },
        { text: 'Continuous Learning', icon: 'learning.svg' },
        { text: 'Work-Life Balance', icon: 'life.svg' },
        { text: 'Employee Recognition', icon: 'recognition.svg' },
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-2 place-items-center h-100 bg-[#de673c] gap-4 p-7">
            {valueItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center max-w-32">
                    <img alt="value icon" src={item.icon} />
                    <h2 className={'text-white'}>{item.text}</h2>
                </div>
            ))}
        </div>
    );
};
