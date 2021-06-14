import React from "react";


export default function AboutSection(){
    return (
        <section>
            <div className="container w-50">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text header-1">Overview</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="text">
                            The goal of this project is to produce a high quality 3D reconstruction
                             of an object from a collection of structured light scans.
                            Specifically, a series of images of a small sculpture dubbed “couple” 
                            are processed in python to create the 3D reconstruction. Post processing
                            is done using tools such as MeshLab for and Blender.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}