import "./conversion.css"

export function Conversion({children}){

    return(
        <div>
            <div className="convert">
                <div className="block">
                    <div>Conv</div>
                </div>
            </div>
            <div className="convert">
                <div className="block">
                    <div>Conv</div>
                </div>
            </div>
            <div className="convert">
                <div className="block">
                    <div>Conv</div>
                </div>
            </div>
            {children}
        </div>
    );
}