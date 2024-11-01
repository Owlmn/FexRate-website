import "./conversion.css"

export function Conversion({children}){

    return(
        <div>
            <div className="convert">
                <div className="temp">
                    <div>Conversion block</div>
                </div>
            </div>
            {children}
        </div>
    );
}