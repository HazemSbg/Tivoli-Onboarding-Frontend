export const Header = () => {
    return (
        <header className={'flex bg-[#f0e9e6] text-black gap-20 h-16 items-center'}>
            <div id="contacts" className={'flex gap-3 p-10 text-xs'}>
                <a href="tel:+97440212000">(+974) 4021-2000</a>
                <a href="mailto:info@tivoligroup.com">info@tivoligroup.com</a>
            </div>
            <div id={'links'} className={'flex gap-3 font-bold ml-auto p-10'}>
                <a href='https://www.tivoligroup.com/'>HOME</a>
                <a href='https://www.tivoligroup.com/'>COMPANIES</a>
                <a href='https://www.tivoligroup.com/'>OUR SERVICES</a>
                <a href='https://www.tivoligroup.com/'>CAREERS</a>
            </div>
        </header>
    )
}