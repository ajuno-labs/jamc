import { Link } from "@/i18n/navigation"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { CourseModule } from "@/lib/types/course"

interface CourseModulesProps {
  modules: CourseModule[] | undefined
  courseId: string
  courseSlug: string
  isEnrolled: boolean
}

export default function CourseModules({ modules = [], courseId, courseSlug, isEnrolled }: CourseModulesProps) {
  if (!modules?.length) {
    return (
      <div className="text-muted-foreground text-center py-4">
        No modules available yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Card key={module.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              {isEnrolled ? (
                <Link href={`/courses/${courseId}/${courseSlug}/modules/${module.id}`} className="hover:underline">
                  Module {index + 1}: {module.title}
                </Link>
              ) : (
                <>Module {index + 1}: {module.title}</>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {module.chapters?.length 
                ? `${module.chapters.length} chapter${module.chapters.length !== 1 ? 's' : ''}`
                : 'No chapters yet'
              }
            </p>
            {!isEnrolled && index === 0 && (
              <p className="text-sm mt-2 italic">Enroll in this course to access all modules</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 