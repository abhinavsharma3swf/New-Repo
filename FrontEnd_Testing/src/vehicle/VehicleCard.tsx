
//RSC to create this. It is a shortcut
 export type Vehicle = {
    id: number,
    make: string,
     model: string
}

type VehicleCardProps = {
    vehicle: Vehicle;
}

const VehicleCard = ({vehicle}: VehicleCardProps) => {
    return (
        <div role={'listitem'}>
        <div role={'heading'} aria-label={'Vehicle Card Header'}>
            Make: {vehicle.make}
        </div>
            <div role={"contentinfo"} aria-label={'Vehicle Model'}>
                Model: {vehicle.model}

            </div>
            </div>
    );
};

export default VehicleCard;