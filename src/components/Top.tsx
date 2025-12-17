export const PageTop = () => {
    return <>
        <div className={'overflow-clip'}>
            <img className={'absolute w-50 h-50 left-0 right-0 mt-20 m-auto z-30'} src={'tivoli-box.svg'} alt={'tivoli-logo'}/>
            <img
                alt={'tivoli-building'}
                className={'tivoli-image max-h-120 min-w-screen mask-l-from-40% mask-l-to-90% mask-r-from-40% mask-r-to-90%'}
                src={'tivoli-building.jpg'}
            />
        </div>
    </>
}