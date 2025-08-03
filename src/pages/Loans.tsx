import React from 'react';
import { Calendar as CalendarIcon, Clock, User, Package, BookOpen } from 'lucide-react';

const Loans = () => {
  // Datos del horario semanal
  const schedule = {
    timeSlots: [
      { time: '07:00 A 13:00', label: 'DE 07:00 A 13:00' },
      { time: '13:00 A 13:30', label: 'DE 13:00 A 13:30' },
      { time: '13:30 A 18:00', label: 'DE 13:30 A 18:00' },
      { time: '18:00 A 22:00', label: 'DE 18:00 A 22:00' }
    ],
    days: ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'],
    classes: {
      '07:00-LUNES': { subject: 'CONSTRUCCIÓN DE SOFTWARE', teacher: 'ORLANDO CASTRO', code: 'FICHA 289975' },
      '07:00-MARTES': { subject: 'CONSTRUCCIÓN DE SOFTWARE', teacher: 'ORLANDO CASTRO', code: 'FICHA 289975*' },
      '07:00-MIÉRCOLES': { subject: 'CONSTRUCCIÓN DE SOFTWARE', teacher: 'ORLANDO CASTRO', code: 'FICHA 289975*' },
      '07:00-JUEVES': { subject: 'CONSTRUCCIÓN DE SOFTWARE', teacher: 'ORLANDO CASTRO', code: 'FICHA 289975*' },
      '07:00-VIERNES': { subject: 'CONSTRUCCIÓN DE SOFTWARE', teacher: 'ORLANDO CASTRO', code: 'FICHA 289975*' },
      '07:00-SÁBADO': { subject: 'NO CLASE', teacher: '', code: '' },
      '13:00-LUNES': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:00-MARTES': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:00-MIÉRCOLES': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:00-JUEVES': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:00-VIERNES': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:00-SÁBADO': { subject: 'ASEO COLABOR DE TURNO', teacher: '', code: '' },
      '13:30-LUNES': { subject: 'FRONT END E', teacher: 'ESTEBAN HERNÁDEZ', code: 'FICHA 289999' },
      '13:30-MARTES': { subject: 'FRONT END E', teacher: 'ESTEBAN HERNÁDEZ', code: 'FICHA 289999' },
      '13:30-MIÉRCOLES': { subject: 'NO HAY CLASE', teacher: '', code: '' },
      '13:30-JUEVES': { subject: 'FRONT END E', teacher: 'ESTEBAN HERNÁDEZ', code: 'FICHA 289999' },
      '13:30-VIERNES': { subject: 'FRONT END E', teacher: 'ESTEBAN HERNÁDEZ', code: 'FICHA 289999' },
      '13:30-SÁBADO': { subject: 'FRONT END E', teacher: 'ESTEBAN HERNÁDEZ', code: 'FICHA 289999' },
      '18:00-LUNES': { subject: 'FÍSICA', teacher: 'PEDRO MARTÍNEZ', code: 'FICHA 295634' },
      '18:00-MARTES': { subject: 'FÍSICA', teacher: 'PEDRO MARTÍNEZ', code: 'FICHA 295634' },
      '18:00-MIÉRCOLES': { subject: 'FÍSICA', teacher: 'PEDRO MARTÍNEZ', code: 'FICHA 295634' },
      '18:00-JUEVES': { subject: 'NO HAY CLASE', teacher: '', code: '' },
      '18:00-VIERNES': { subject: 'FÍSICA', teacher: 'PEDRO MARTÍNEZ', code: 'FICHA 295634' },
      '18:00-SÁBADO': { subject: 'FÍSICA', teacher: 'PEDRO MARTÍNEZ', code: 'FICHA 295634' }
    }
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Horario de Aulas - SENASEC</h2>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <span className="text-sm text-gray-600">PRÉSTAMOS AULA SISTEMAS II</span>
          <span className="text-sm font-medium text-blue-600">SEMANA 35 DEL 04 AL 09 AGOSTO</span>
        </div>
      </div>

      {/* Horario Semanal */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Encabezado de la tabla */}
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider border-r border-blue-500">
                  JORNADA
                </th>
                {schedule.days.map((day) => (
                  <th key={day} className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider border-r border-blue-500 last:border-r-0">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Cuerpo de la tabla */}
            <tbody className="bg-white divide-y divide-gray-200">
              {schedule.timeSlots.map((slot, index) => (
                <tr key={slot.time} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {/* Columna de horario */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-200 border-r border-gray-300">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      {slot.label}
                    </div>
                  </td>
                  
                  {/* Columnas de días */}
                  {schedule.days.map((day) => {
                    const classKey = `${slot.time.split(' ')[0]}-${day}`;
                    const classInfo = schedule.classes[classKey as keyof typeof schedule.classes];
                    const isNoClass = !classInfo || classInfo.subject === 'NO CLASE' || classInfo.subject === 'NO HAY CLASE';
                    const isBreak = classInfo?.subject === 'ASEO COLABOR DE TURNO';
                    
                    return (
                      <td key={`${slot.time}-${day}`} className="px-4 py-4 border-r border-gray-200 last:border-r-0">
                        {classInfo && (
                          <div className={`rounded-lg p-3 text-center transition-all duration-200 hover:shadow-md ${
                            isNoClass 
                              ? 'bg-red-50 border-2 border-red-200 text-red-700'
                              : isBreak
                              ? 'bg-yellow-50 border-2 border-yellow-200 text-yellow-700'
                              : 'bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 text-blue-800 hover:from-blue-100 hover:to-indigo-200'
                          }`}>
                            {!isNoClass && (
                              <>
                                <div className="flex items-center justify-center mb-2">
                                  {isBreak ? (
                                    <Package className="h-4 w-4 mr-1" />
                                  ) : (
                                    <BookOpen className="h-4 w-4 mr-1" />
                                  )}
                                </div>
                                <div className="text-xs font-bold uppercase mb-1">
                                  {classInfo.subject}
                                </div>
                                {classInfo.teacher && (
                                  <div className="text-xs font-medium mb-1 flex items-center justify-center">
                                    <User className="h-3 w-3 mr-1" />
                                    {classInfo.teacher}
                                  </div>
                                )}
                                {classInfo.code && (
                                  <div className="text-xs text-gray-600">
                                    {classInfo.code}
                                  </div>
                                )}
                              </>
                            )}
                            {isNoClass && (
                              <div className="text-xs font-bold uppercase">
                                {classInfo.subject}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leyenda y estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Clases Regulares</h3>
              <p className="text-sm text-blue-600">Materias programadas</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-100 shadow-lg rounded-lg p-6 border-2 border-yellow-200">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">Descansos</h3>
              <p className="text-sm text-yellow-600">Períodos de aseo</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-100 shadow-lg rounded-lg p-6 border-2 border-red-200">
          <div className="flex items-center">
            <CalendarIcon className="h-8 w-8 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Sin Clases</h3>
              <p className="text-sm text-red-600">Horarios libres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;