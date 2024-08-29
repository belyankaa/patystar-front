import {useMutation} from "@tanstack/react-query";
import {Http} from "@/utils/httpUtils";

export class EventsService {
    public static useGetAllMutation() {
        return useMutation({
            mutationFn: (body: any) => Http.post('events/get-all', body)
        })

    }
    public static useGetOneMutation() {
        return useMutation({
            mutationFn: (id: number) => Http.get(`events/${id}`)
        })

    }
    public static useCreateMutation() {
        return useMutation({
            mutationFn: (body: any) => Http.post('events', body)
        })

    }
    public static useEditMutation() {
        return useMutation({
            mutationFn: (body: any) => Http.post('events/edit', body)
        })

    }
    public static useDeleteMutation() {
        return useMutation({
            mutationFn: (id: number) => Http.delete(`events/${id}`)
        })

    }
}