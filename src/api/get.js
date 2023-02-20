import { mockApi } from './api';

export async function getCurationTimeAttack(filter) {
    const { data } = await mockApi.get(
        `/home/recommendation/curation/time-attack?filter=${filter}`,
    );
    return data;
}
export async function getCurationSolo(filter) {
    const { data } = await mockApi.get(
        `/home/recommendation/curation/solo?filter=${filter}`,
    );
    return data;
}
export async function getCurationMunch(filter) {
    const { data } = await mockApi.get(
        `/home/recommendation/curation/munch?filter=${filter}`,
    );
    return data;
}
export async function getCurationLeader(filter) {
    const { data } = await mockApi.get(
        `/home/recommendation/curation/leader?filter=${filter}`,
    );
    return data;
}
export async function getCurationSpecial(filter) {
    const { data } = await mockApi.get(
        `/home/recommendation/curation/special?filter=${filter}`,
    );
    return data;
}
