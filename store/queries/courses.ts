import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { sleep } from '@/lib/utils';

const queryKeys = {
	getCoursesByName: (filter: string) =>
		['get:courses:name', { filter }] as const
};

type getCoursesByNameKeys = ReturnType<typeof queryKeys.getCoursesByName>;

const DATA = {
	courses: [
		{
			name: 'React',
			id: 12
		},
		{
			name: 'Next.js',
			id: 13
		}
	]
};

function getCourses({ queryKey }: QueryFunctionContext<getCoursesByNameKeys>) {
	console.log('🚀 ~ requests init ~');
	const [_key, { filter }] = queryKey;

	const courses = DATA.courses.filter((course) => course.name.includes(filter));

	return sleep({
		time: 1000,
		response: {
			ok: true,
			courses:
				courses.length > 0
					? courses
					: {
							name: 'No courses found',
							id: 400
					  }
		}
	});
}

export function useGetCoursesByNameQuery(name: string) {
	const query = useQuery({
		queryKey: queryKeys.getCoursesByName(name),
		queryFn: getCourses,
		select: (data) => data.courses
	});

	return query;
}
