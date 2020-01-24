import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nulla!'
            },
            {
                icon: <FaHiking></FaHiking>,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nulla!'
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "Free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nulla!'
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "Stringest Beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nulla!'
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
