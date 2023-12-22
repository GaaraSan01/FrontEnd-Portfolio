'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useEffect } from "react"
import { ProjetosApi } from "@/app/api/_api"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Card } from "../cards/Card"
import { ApiResponse } from "@/app/@types/TypeProjects"
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = () => {
    const [loading, setLoading] = useState(true)
    const [projetos, setProjetos] = useState<ApiResponse>([])

    useEffect(() => {
        const getProjets = async (): Promise<ApiResponse> => {
            try {
                setLoading(true)
                const response = await ProjetosApi.get<ApiResponse>('/projetos')
                const data = response.data
                setLoading(false)
                return data
            } catch (error) {
                console.error(error)
                return []
            }
        }
        getProjets().then(data => setProjetos(data))
    }, [])
    
    return (
        <div className="max-w-7xl mx-auto px-6">
            <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                loop={true}
                grabCursor={true}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
            {
                loading && <p className="text-center font-bold">Carregando projetos...</p>
            }
            {
                !loading && (
                    projetos.map((projeto) => {
                        return(
                            <SwiperSlide key={projeto.id}>
                                <Card img={projeto.imagem} title={projeto.titulo} copy={projeto.descricao} link={projeto.link} categoria={projeto.categoria} key={projeto.id}/>
                            </SwiperSlide>
                        )
                    })
                )
            }
            </Swiper>
        </div>
    )
}